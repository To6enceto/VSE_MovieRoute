import { useAppSelector } from "../app/hooks";
import { selectToken } from "../features/auth/authSlice";

import { Outlet, Navigate } from "react-router-dom";

export default function GameGuard() {
	const token = useAppSelector(selectToken);

	if (!token) {
		return <Navigate to="/sign-in" />;
	}

	return <Outlet />;
}
