import { Guid } from "guid-typescript";

export interface LofaszState {
 id: Guid,
 name: string,
 isFriendly: boolean
}

export interface LofaszokState {
  lofaszok: LofaszState[]
 }
