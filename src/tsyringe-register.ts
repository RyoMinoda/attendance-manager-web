import "reflect-metadata";
import { container } from "tsyringe";
import { GroupRepository } from "./repositories/GroupRepository";
import { IGroupRepository } from "./repositories/Interfaces/IGroupRepository";
import { IMemberRepository } from "./repositories/Interfaces/IMemberRepository";
import { MemberRepository } from "./repositories/MemberRepository";
import { GroupRepositoryMock } from "./repositories/mock/GroupRepositoryMock";
import { MemberRepositoryMock } from "./repositories/mock/MemberRepositoryMock";

container.clearInstances();
container.register<IMemberRepository>(MemberRepository, { useClass: MemberRepositoryMock });
container.register<IGroupRepository>(GroupRepository, { useClass: GroupRepositoryMock });