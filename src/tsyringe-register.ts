import "reflect-metadata";
import { container } from "tsyringe";
import { AttendanceRepository } from "./repositories/AttendanceRepository";
import { GroupRepository } from "./repositories/GroupRepository";
import { IAttendanceRepository } from "./repositories/Interfaces/IAttendanceRepository";
import { IGroupRepository } from "./repositories/Interfaces/IGroupRepository";
import { IMemberRepository } from "./repositories/Interfaces/IMemberRepository";
import { IScheduleRepository } from "./repositories/Interfaces/IScheduleRepository";
import { ITimelineRepository } from "./repositories/Interfaces/ITimelineRepository";
import { MemberRepository } from "./repositories/MemberRepository";
import { AttendanceRepositoryMock } from "./repositories/mock/AttendanceRepositoryMock";
import { GroupRepositoryMock } from "./repositories/mock/GroupRepositoryMock";
import { MemberRepositoryMock } from "./repositories/mock/MemberRepositoryMock";
import { ScheduleRepositoryMock } from "./repositories/mock/ScheduleRepositoryMock";
import { TimelineRepositoryMock } from "./repositories/mock/TimelineRepositoryMock";
import { ScheduleRepository } from "./repositories/ScheduleRepository";
import { TimelineRepository } from "./repositories/TimelineRepository";

container.clearInstances();
container.register<IMemberRepository>(MemberRepository, { useClass: MemberRepositoryMock });
container.register<IGroupRepository>(GroupRepository, { useClass: GroupRepositoryMock });
container.register<IScheduleRepository>(ScheduleRepository, { useClass: ScheduleRepositoryMock });
container.register<ITimelineRepository>(TimelineRepository, { useClass: TimelineRepositoryMock });
container.register<IAttendanceRepository>(AttendanceRepository, { useClass: AttendanceRepositoryMock });