import { Voter } from "./voter";
 
export interface Vote {
  vote_id: string;
  voter: Voter
  candId: string;
}