import DashboardTop from "../../pages/DashboardTop";
import ServiceTop from "../../pages/ServiceTop";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { Dictionary, KeyValue } from "../../utils/Dictionary";

const Path = {
    ServiceTop: "",
    SignIn: "sign_in",
    SignUp: "sign_up",
    DashboardTop: "dashboard",
    GroupTop: "groups",
    GroupDetail: "groups/:groupId",
    CreateGroup: "groups/create",
    ReservationsTop:  "reservations",
    ReservationDetail:"reservations/:reservationId",
    CreateReservation: "reservations/create"
} as const;

export const PathTypes = Object.keys(Path);

const keyValues : Array<KeyValue<JSX.Element>> = [
    { key: Path.ServiceTop, value: <ServiceTop /> },
    { key: Path.DashboardTop, value: <DashboardTop /> },
    { key: Path.SignIn, value: <SignIn /> },
    { key: Path.SignUp, value: <SignUp /> },
];

export const PathDictionary = new Dictionary(keyValues);