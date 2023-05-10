import axios from 'axios'

// use an Object to made Space sdk
export const Space = {

  /*
    @serviceUrl: REQUEST SERVICE URL
    @token: REQUEST HEADER AUTHORIZATIONS
    @headers: REQUEST HEADER PARAMETERS
  */
  serviceUrl:  'https://space.sofunny.io',
  token: '',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },


  /*
    description: 获取用户空间
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
    getSpace({ url, params, headers, method = 'get'}) {
      return new Promise((resolve, reject) => {
        axios({
          method,
          baseURL: this.serviceUrl,
          url,
          params,
          headers: Object.assign(this.headers, headers)
        }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },


  /*
  description: 创建空间
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
  createSpace({ url, data, headers, method = 'post'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },


  /*
    description: 查询单个空间
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
  queryUserSpace({ url, params, headers, method = 'get'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        params,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },


  /*
    description: 删除单个用户空间
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @method: REQUEST METHOD
  */
  deleteUserSpace({ url, data, headers, method = 'delete'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },


  /*
    description: 更新用户空间
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @method: REQUEST METHOD
  */
  updateUserSpace({ url, data, headers, method = 'put'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}


// use a Class to made Space sdk
export class Space1{

  /*
    @serviceUrl: REQUEST SERVICE URL
  */
  serviceUrl =  'https://space.sofunny.io'
  token = ''
  headers = {
    Authorization: 'Bearer ' + this.token
  }


  /*
    @serviceUrl: REQUEST SERVICE URL
    @token: REQUEST HEADER AUTHORIZATIONS
  */
  constructor(serviceUrl = 'https://space.sofunny.io', token) {
    this.serviceUrl = serviceUrl
    this.token = token
    this.headers = {
      Authorization: 'Bearer ' + this.token
    }
  }


  /*
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
  getSpace({ url, params, headers, method = 'get'}) {
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        params,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }


  /*
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
  createSpace({ url, data, headers, method = 'post'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }


  /*
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @params: REQUEST QUERY PARAMETERS 
    @method: REQUEST METHOD
  */
  queryUserSpace({ url, params, headers, method = 'get'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        params,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }


  /*
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @method: REQUEST METHOD
  */
  deleteUserSpace({ url, data, headers, method = 'delete'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }


  /*
    @url: REQUEST URL
    @headers REQUEST HEADER PARAMETERS
    @data: REQUEST BODY DATA 
    @method: REQUEST METHOD
  */
  updateUserSpace({ url, data, headers, method = 'put'}){
    return new Promise((resolve, reject) => {
      axios({
        method,
        baseURL: this.serviceUrl,
        url,
        data,
        headers: Object.assign(this.headers, headers)
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

}
