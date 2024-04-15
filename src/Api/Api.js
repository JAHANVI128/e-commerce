import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const response = await axios.get('https://ecom-p4ql.onrender.com/product/showproduct')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}
