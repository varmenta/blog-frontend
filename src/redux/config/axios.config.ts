/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { API_BASE_URL } from '../constants/api'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: API_BASE_URL + url,
        method,
        data,
        params,
      })

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
