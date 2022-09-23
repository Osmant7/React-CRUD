import React from 'react';
import axios from 'axios';


export default class EmployeCreate extends React.Component{

  state = {
  nom:'',
  prenom:'',
  age:'',
  grade:'',
  adresse:'',
  }

  addUser=event => {
    const userObject={
        nom:this.state.nom,
        prenom:this.state.prenom,
        age:this.state.age,
        grade:this.state.grade,
        adresse:this.state.adresse,
    }
    
    axios.post(`https://632c755f1aabd837399c9f77.mockapi.io/Ressourceshumaines/`, userObject)
    .then(res => {
    
    this.setState({ 
        nom:'',
        prenom:'',
        age:'',
        grade:'',
        adresse:'',
 });
    console.log("employee",userObject)
    })
    event.preventDefault();
    alert("ajouté avec succés");
    window.location.reload();
    }

  handleSubmit = (event) => 
  {
    let nom = this.state.nom;
    let prenom = this.state.prenom;
    let age = this.state.age;
    let grade = this.state.grade;
    let adresse = this.state.adresse;
      
      if(typeof nom === 'string' && typeof prenom === 'string' && nom.length > 3 && prenom.length > 3 && adresse.length > 20 && age > 20 && grade === "admin" || grade === "ingénieur" || grade === "technicien" || grade === "ouvrier")
      {
            {this.addUser()};

        }else{
            alert('attention les champs ne sont pas correctement remplis ! ');
        }
        event.preventDefault();
        
    }
    
    onChange = e => { // arrow function
        this.setState({ [e.target.name]: e.target.value });
    };
    
    // reset()
    // {
    //     this.setState({
    //             nom: '',
    //             prenom: '',
    //             age: '',
    //             grade:'',
    //             adresse:'', 
    //         })}
            
            render() {
                return(<div>
        
            <form onSubmit={this.handleSubmit}>
                nom : <input type="text" value={this.state.nom} onChange={this.onChange} name="nom"></input><br></br>
                prenom : <input type="text" value={this.state.prenom} onChange={this.onChange}  name="prenom"></input><br></br>
                age : <input type="number" value={this.state.age} onChange={this.onChange} name="age"></input><br></br>
                grade : <input type="text" value={this.state.grade} onChange={this.onChange}  name="grade"></input><br></br>
                adresse : <input type="text" value={this.state.adresse} onChange={this.onChange}  name="adresse"></input><br></br>

                <button type='submit'>valider</button>
                <input type="reset" className="btn btn-warning" value="vider"></input>
            </form>
            
        </div>
      )
    };
}
//     let nom = this.state.nom;
//     let prenom = this.state.prenom;
//     let age = this.state.age;
//     let grade = this.state.grade;
//     let adresse = this.state.adresse;
//         if(age > 20){
//             this.setState({[this.state.age] : age });
//         }else{
//             alert('attention votre age est en dessous de 20');
//         }

//         if(grade === "admin" || grade === "ingénieur" || grade === "technicien" || grade === "ouvrier"){
//             this.setState({[this.state.grade] : grade });
//         }else{
//             alert('attention le grade entré n\'est pas existant');
//         }

//         if(adresse.length > 20){
//             this.setState({[this.state.adresse] : adresse });
//         }else{
//             alert('attention  l\'adresse entrée n\'est pas existante');
//         }

//         event.preventDefault();