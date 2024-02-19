
import { auth, firestore } from "@/firebase";  //Here I am importing the 'auth' and 'firestore' from the Firebase module in the "@/firebase" directory.
import { collection, doc, getDoc, getDocs, query, where, addDoc, updateDoc, deleteDoc, setDoc, Firestore } from "firebase/firestore"; // Here I am importing the Firestore-related functions and types from the Firebase Firestore module.
import { Vote } from "@/models/vote"; import { Voter } from "@/models/voter";
 
 
class Database {
    private static instance: Database;
 
    // Private constructor for singleton pattern
    private constructor() { }
 
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
 
    // async addVoter method
 
    async addVoter(voter: Voter): Promise<void> {
        // Create a reference to a new document with the specified ID
        const voterRef = doc(collection(firestore, 'voters'), voter.userId);
        console.log('voterRef', voterRef);
 
        try {
            // Set the data of the document
            await setDoc(voterRef, voter);
            console.log('Voter document added successfully!');
        } catch (error) {
            console.error('Error adding voter document: ', error);
            throw error; // Rethrow the error to handle it upstream
        }
    }
 
    // async getVoter method
 
    async getVoter(voterId: string): Promise<Voter | undefined> {
        // Create a reference to the document
        const voterRef = doc(collection(firestore, 'voters'), voterId);
 
        try {
            // Get the document
            const voterDoc = await getDoc(voterRef);
            if (voterDoc.exists()) {
                // Return the document data
                return voterDoc.data() as Voter;
            } else {
                console.log('No such document!');
                return undefined;
            }
        } catch (error) {
            console.error('Error getting voter document: ', error);
            throw error; // Rethrow the error to handle it upstream
        }
    }
 
    // add Vote
 
    async addVote(vote: Vote): Promise<void> {
        // Add a new document with a generated ID
        try {
            const voteRef = await addDoc(collection(firestore, 'votes'), vote);
            console.log('Vote document added with ID: ', voteRef.id);
        } catch (error) {
            console.error('Error adding vote document: ', error);
            throw error; // Rethrow the error to handle it upstream
        }
    }
 
    // get all votes
 
    async getVotes(): Promise<Vote[]> {
        const votes: Vote[] = [];
        const votesRef = collection(firestore, 'votes');
        const votesSnapshot = await getDocs(votesRef);
        votesSnapshot.forEach((doc) => {
            votes.push(doc.data() as Vote);
        });
        return votes;
    }
 
    // get voter by email
 
    async getVoterByEmail(email: string): Promise<Voter | undefined> {
        const votersRef = collection(firestore, 'voters');
        const q = query(votersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
            return querySnapshot.docs[0].data() as Voter;
        }
        return undefined;
    }
 
    // get all voters
 
    async getVoters(): Promise<Voter[]> {
        const voters: Voter[] = [];
        const votersRef = collection(firestore, 'voters');
        const votersSnapshot = await getDocs(votersRef);
        votersSnapshot.forEach((doc) => {
            voters.push(doc.data() as Voter);
        });
        return voters;
    }
 
 
 
}
 
export default Database.getInstance();