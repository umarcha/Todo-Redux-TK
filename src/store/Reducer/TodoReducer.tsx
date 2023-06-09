import { AppDispatch } from "..";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../config/axiosConfig";
import { StatusIF } from "../../types";
import { setData } from "../Slices/todoSlice";

export const getTodo = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getRequest("get-todo")
      dispatch(setData(data?.todos))
    } catch (error) {
      console.log(error);
    }
  }
}

export const addTodo = (text: string) => {
  return async (disptach: AppDispatch) => {
    try {
      await postRequest("add-todo", { title: text, status: false })
      disptach(getTodo())
    } catch (error) {
      console.log(error);

    }
  }
}

export const deteleTodo = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteRequest(`delete/${id}`)
      dispatch(getTodo())
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateStatusReducer = (data: StatusIF) => {
  return async (dispatch: AppDispatch) => {
    try {
      await patchRequest(`update/${data.id}`, { status: data.status })
      dispatch(getTodo())
    } catch (error) {
      console.log(error);
    }
  }
}