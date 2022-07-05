import DashboardTop from "../../pages/DashboardTop";
import GroupDetail from "../../pages/GroupDetail";
import GroupTop from "../../pages/GroupTop";
import MyAccount from "../../pages/MyAccount";
import ServiceTop from "../../pages/ServiceTop";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { Dictionary, KeyValue } from "../../utils/Dictionary";

export const Path = {
    ServiceTop: "",
    SignIn: "sign_in",
    SignUp: "sign_up",
    SignOut: "sign_out",
    MyAccount: "my_account",
    DashboardTop: "dashboard",
    GroupTop: "groups",
    GroupDetail: "groups/:groupId",
    CreateGroup: "groups/create",
    ReservationsTop:  "reservations",
    ReservationDetail:"reservations/:reservationId",
    CreateReservation: "reservations/create"
} as const;

export const PathTypes = Object.keys(Path);

const componentKeyValues : Array<KeyValue<JSX.Element>> = [
    { key: Path.ServiceTop, value: <ServiceTop /> },
    { key: Path.DashboardTop, value: <DashboardTop /> },
    { key: Path.GroupTop, value: <GroupTop /> },
    { key: Path.GroupDetail, value: <GroupDetail /> },
    { key: Path.SignIn, value: <SignIn /> },
    { key: Path.SignUp, value: <SignUp /> },
    { key: Path.MyAccount, value: <MyAccount /> }
];

export const PathComponentDictionary = new Dictionary(componentKeyValues);

const textKeyValues: Array<KeyValue<string>> = [
    { key: Path.DashboardTop, value: "Home" },
    { key: Path.MyAccount, value: "My Account" },
    { key: Path.GroupTop, value: "Group" },
    { key: Path.GroupDetail, value: "" },
    { key: Path.CreateGroup, value: "Create Group" },
    { key: Path.MyAccount, value: "My Account" }
];

export const PathTextDictionary = new Dictionary(textKeyValues);