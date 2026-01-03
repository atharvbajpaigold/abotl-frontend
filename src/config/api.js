// API Configuration
// In production, this should use environment variables
const API_BASE_URL = 'https://abotl-backend.vercel.app';

export const API_ENDPOINTS = {
  // Auth endpoints
  STUDENT_LOGIN: `https://abotl-backend.vercel.app/api/auth/student/login`,
  STUDENT_REGISTER: `https://abotl-backend.vercel.app/api/auth/student/register`,
  STUDENT_LOGOUT: `https://abotl-backend.vercel.app/api/auth/student/logout`,
  STUDENT_PROFILE: `https://abotl-backend.vercel.app/api/auth/student/profile`,
  
  TEACHER_LOGIN: `https://abotl-backend.vercel.app/api/auth/teacher/login`,
  TEACHER_REGISTER: `https://abotl-backend.vercel.app/api/auth/teacher/register`,
  TEACHER_LOGOUT: `https://abotl-backend.vercel.app/api/auth/teacher/logout`,
  TEACHER_PROFILE: `https://abotl-backend.vercel.app/api/auth/teacher/profile`,
  
  // Video endpoints
  UPLOAD_VIDEO: `https://abotl-backend.vercel.app/api/teacher/upload-video`,
  GET_ALL_VIDEOS: `https://abotl-backend.vercel.app/api/teacher/videos`,
  GET_TEACHER_VIDEOS: `https://abotl-backend.vercel.app/api/teacher/my-videos`,
  LIKE_VIDEO: (videoId) => `https://abotl-backend.vercel.app/api/teacher/videos/${videoId}/like`,
  DELETE_VIDEO: (videoId) => `https://abotl-backend.vercel.app/api/teacher/videos/${videoId}`,
};

export default API_BASE_URL;

