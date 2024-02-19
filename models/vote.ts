import { Voter } from "./voter"; //Here we are importing the voter object
 
//Here I am defining the Vote object.
export interface Vote {
  vote_id: string;
  voter: Voter
  candId: string;
}