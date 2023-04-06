import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <h1>This is Contact Component</h1>
            <p>lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
            </p>
            <p>lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
                lorem you khnow how success in our life but not is posibble i know insha allah
                i will be rich and beautiful by Allah use the pain as fuel and keep going
            </p>
            <button onClick={() => {
                Navigate('/')
            }}>Go to Home</button>
        </div>
    )
}

export default Contact