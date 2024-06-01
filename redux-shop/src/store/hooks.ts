import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;
type Selector = TypedUseSelectorHook<RootState>;

// Dispatch capable of dispatching only AppDispatch functions
export const useAppDispatch: DispatchFunction = useDispatch;

// selector capable of selecting only RootState states
export const useAppSelector: Selector = useSelector;