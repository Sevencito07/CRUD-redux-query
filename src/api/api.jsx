import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=>'/tasks',
            providesTags :['Tasks'],
            transformResponse: response => response.sort((a,b)=>
            b.id - a.id)
        }),
        createTask: builder.mutation({
            query:(newTask)=>({
                url:'/tasks',
                method:'POST',
                body: newTask,
            }),
            invalidatesTags: ["Tasks"],
        }),
        deleteTask: builder.mutation({
            query:(taskId)=>({
                url:`/tasks/${taskId}`,
                method:'DELETE',
            }),
            invalidatesTags:['Tasks']
        }),
        updateTask: builder.mutation({
            query:(updateTasks)=>({
                url: `/tasks/${updateTasks.id}`,
                method: "PATCH",
                body: updateTasks
            }),
            invalidatesTags:['Tasks']
        })
    })
})

export const { useUpdateTaskMutation,  useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation} = apiSlice;