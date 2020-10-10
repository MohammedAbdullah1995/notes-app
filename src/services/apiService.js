import axios from 'axios';


export default class ApiService {

    static api = axios.create({
        baseURL: 'http://localhost:3000/notes',
        headers: { 'Content-Type': 'Application/Json' }
    })



    static fetchAllNotes = () => {
    
        return this.api.get();

    }

    static addANote = note => {

        return this.api.post("", note);


    }

    static updateNote = note => {

        return this.api.post("/" + note._id , { title : note.title , content : note.content});


    }

    static deleteNote = note => {

        return this.api.delete("/" + note._id);

    }


}


