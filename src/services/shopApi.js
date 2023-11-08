import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    getProducts: builder.query({
      query:
        () => 'userProducts/wgWpHkdUZ0hu8msnSDQ8m39VsZn1.json',
    }),
    getProductsByCategory: builder.query({
      query: category =>
        `userProducts.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
      query: ({ product, cantidad, localId }) => ({
        url: `userComidas/${localId}.json`,
        method: 'POST',
        body: {
          id: Date.now(),
          title: product.title,
          calorias: Number(product.valoreEnegetico) * cantidad / 100,
          carbohidratos: Number(product.hidratosDeCarbono) * cantidad / 100,
          proteinas: Number(product.proteina) * cantidad / 100,
          grasas: Number(product.grasa) * cantidad / 100,
          costo: Number(product.price) * cantidad / 100,
          cantidad: Number(cantidad),

        },
      }),
    }),


    //////
    postNewProduct: builder.mutation({
      query: ({ localId,
        name,
        image,
        newCalories,
        newCategorie,
        newCarbohydrates,
        newProtein,
        newPrice, newFat }) => ({
          url: `userProducts/${localId}.json`,
          method: 'POST',
          body: {

            price: newPrice,
            category: newCategorie,
            title: name,
            images: image,
            grasas: newFat,
            proteinas: newProtein,
            hidratosDeCarbono: newCarbohydrates,
            valoreEnegetico: newCalories,
            id: Date.now(),

          },
        }),
    }),

    /////




    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image,
        },
      }),
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  ///
  usePostNewProductMutation,
  ///
  usePostProfileImageMutation,

} = shopApi
