import axios from 'axios'
import Qs from 'qs'
import router from '@/router'
import useJsonConfig from '@/composables/useJsonConfig'

axios.defaults.headers.common['x-request-app'] = 'WebPos'

const axiosInstance = axios.create({
  baseURL: undefined,
  timeout: 300000,
})

async function navigateToUnauthorized() {
  await router.push('/unauthorized')
}

let errorMessage = 'An error occurred while processing the request'

axiosInstance.interceptors.response.use(
  (response) => {
    response.content = response.data?.data
    response.message = response.data?.message
    response.success = response.status === 200
    response.notFound = response.status === 404
    response.meta = response.data?.meta
    return response
  },
  async (error) => {
    if (!error.response)
      return Promise.reject(error)

    if (error.response.status === 401) {
      errorMessage = 'Session expired. Please login again.'
      switch (error.config.url.toLowerCase()) {
        case '/api/login/login':
          return Promise.reject(errorMessage)
      }
    }
    else if (error.response.status === 402) {
      errorMessage = 'Your License has expired. Please contact Software Vendor'
      await router.push('/license-expired')
    }
    else if (error.response.status === 403) {
      errorMessage = 'Forbidden. You do not have permission to access this resource.'
      await navigateToUnauthorized()
    }
    error.error = error.response.data?.error
    error.errorMessage = error.response.data?.error?.message ?? errorMessage
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.request.use(
  async (config) => {
    if (axiosInstance.defaults.baseURL === undefined) {
      config.baseURL = (await useJsonConfig())?.serverUrl
      axiosInstance.defaults.baseURL = config.baseURL
    }
    else {
      config.baseURL = axiosInstance.defaults.baseURL
    }
    config.paramsSerializer = (params) => {
      return Qs.stringify(params, { arrayFormat: 'repeat' })
    }

    // Modify the code for auth
    // const store = useAuthStore();
    // config.headers.Authorization = "Bearer " + store.user.token;
    // config.headers["CustomClaim"] = store.user.authProtectedClaim;
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const Get = async (url: string, params?: any): Promise<AxiosRes> => await axiosInstance.get(url, { params })
export const GetContent = async (url: string, params?: any) => (await axiosInstance.get(url, { params }))?.data.Content

export default axiosInstance
