import { configureStore } from '@reduxjs/toolkit'
import { ADD_TO_CART, CART_ITEMS, CHANGE_QUANTITY } from '../actions/Action';


const initailStateProduct = {
    product: [
        {
            id: 1,
            name: "Sony Camera",
            category: "Camera",
            price: "$1256.12",
            rating: 3,
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 2,
            name: "70mm Lense",
            category: "Camera",
            price: "$1000.15",
            rating: 3,
            image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        },
        {
            id: 3,
            name: "Apple Watch",
            category: "Watch",
            price: "$1256.12",
            rating: 3,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        },
        {
            id: 4,
            name: "Apple Watch",
            category: "Watch",
            price: "$1256.12",
            rating: 3,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        }
    ]
}

const initailStateCart = {
    items: []
}

const initailStateOrder = {
    items : [],
    shipping_charge : 30,
    discount : 10,
    shipping_address : "",
}

const productReducer = (state = initailStateProduct, action) => {
    return state;
}

const cartReducer = (state = initailStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.items.find(item=> item.id.toString() === action.payload.id.toString())) {
                return state;
            }
            return { ...state, items: [...state.items, {...action.payload, quantity : 1}] }
        case CHANGE_QUANTITY:
            const oldItems = state.items.find((item) => item.id === action.payload.id)
            const index = state.items.indexOf(oldItems)
            const newItems = [...state.items];
            newItems[index] = action.payload
        return { ...state, items: newItems}
        default:
            return state;
    }
}

const orderReducer = (state = initailStateOrder, action) => {
    switch (action.type) {
        case CART_ITEMS:
            return { ...state, items: action.payload }
        default:
            return state;
    }
}

const Store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        order : orderReducer,
    }
})


export default Store