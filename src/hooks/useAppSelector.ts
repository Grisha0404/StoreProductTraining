import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStoreType} from "../Redux/reduxStore";

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector