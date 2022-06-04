import { Dictionary, KeyValue } from "../../../../utils/Dictionary";
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { SxProps, Theme } from "@mui/material";
import { Palette } from "../../../../models/utils/Palette";

export const GetStartedIconUnion = {
    Schedule: 'Schedule',
    Member: 'Member',
    Attendance: 'Attendance',
} as const;


export type GetStartedIconButtonType = typeof GetStartedIconUnion[keyof typeof GetStartedIconUnion];

export const GetStartedIconButtons = Object.values(GetStartedIconUnion).map(x => x);

const IconTypeKeyValue: Array<KeyValue<(sx: SxProps<Theme>) => React.ReactNode>> = [
    { key: GetStartedIconUnion.Attendance, value: (sx: SxProps<Theme>) => <AssignmentTurnedInIcon sx={sx} /> },
    { key: GetStartedIconUnion.Member, value: (sx: SxProps<Theme>) => <PersonIcon sx={sx} /> },
    { key: GetStartedIconUnion.Schedule, value: (sx: SxProps<Theme>) => <EventNoteIcon sx={sx} /> }
]

export const IconTypeDictionary = new Dictionary<(sx: SxProps<Theme>) => React.ReactNode>(IconTypeKeyValue); 

const IconColorKeyValue: Array<KeyValue<(palette: Palette) => string>> = [
    { key: GetStartedIconUnion.Attendance, value: (palette: Palette) => palette.secondary.blue },
    { key: GetStartedIconUnion.Member, value: (palette: Palette) => palette.secondary.orange },
    { key: GetStartedIconUnion.Schedule, value: (palette: Palette) => palette.secondary.red }
];

export const IconColorDictionary = new Dictionary<(palette: Palette) => string>(IconColorKeyValue);

const IconButtonTextKeyValue: Array<KeyValue<string>> = [
    { key: GetStartedIconUnion.Attendance, value: "Collect attendance data of your group"},
    { key: GetStartedIconUnion.Member, value: "Create a group and add a member"},
    { key: GetStartedIconUnion.Schedule, value: "Design your event schedule"},
];

export const IconButtonTextDictionary = new Dictionary<string>(IconButtonTextKeyValue);