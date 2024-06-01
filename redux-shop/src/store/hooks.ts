import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

// Dispatch capable of dispatching only AppDispatch functions
export const useCartDispatch: DispatchFunction = useDispatch;
