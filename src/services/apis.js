const BASE_URL = process.env.REACT_APP_API_URL

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}









// // PROFILE ENDPOINTS
// export const profileEndpoints = {
//     GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
//     GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
//     GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
//   }
