import React from 'react';
import axios from 'axios';


export default class EmployeRead extends React.Component{

  state = {
  employes: [],
  }
  componentDidMount() {
    axios.get(`https://632c755f1aabd837399c9f77.mockapi.io/Ressourceshumaines`)
    .then(res => {
    const employes = res.data;
    this.setState({ employes });
    //console.log("user",users)
    })
    }

    toDelete(id, e){
      
      axios.delete(`https://632c755f1aabd837399c9f77.mockapi.io/Ressourceshumaines/${id}`)
      .then(res => {
      console.log(res);
      console.log(res.data);
      const employes = this.state.employes.filter(item => item.id !== id);
      this.setState({ employes });
      })
      }
  
//   handleSubmit(event) 
//   {
//     let nom = this.state.nom;
//     let prenom = this.state.prenom;
//     let age = this.state.age;
//     let grade = this.state.grade;
//     let adresse = this.state.adresse;

//         if(typeof nom === 'string' && typeof prenom === 'string')
//         {
//             if(nom.length > 3 && prenom.length > 3 ){
//                 this.setState({[this.state.nom] : nom });
//                 this.setState({[this.state.prenom] : prenom });
//             }
//         }else{
//             alert('attention le nom et le prenom doivent être composé que de chaine de caractères');
//         }

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
//   }


  

  onChange = e => { // arrow function
  this.setState({ [e.target.name]: e.target.value });
  };


    // reset()
    // {
    // this.setState({
    //     nom: '',
    //     prenom: '',
    //     age: '',
    //     grade:'',
    //     adresse:'', 
    // })}

    render() {
      return(<div>
        
            {/* <form method="post" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.nom} onChange={this.onChange} placeholder="votre nom..." name="nom"></input>
                <input type="text" value={this.state.prenom} onChange={this.onChange} placeholder="votre prenom..." name="prenom"></input>
                <input type="number" value={this.state.age} onChange={this.onChange} placeholder="votre age..." name="age"></input>
                <input type="text" value={this.state.grade} onChange={this.onChange} placeholder="votre grade..." name="grade"></input>
                <input type="text" value={this.state.adresse} onChange={this.onChange} placeholder="votre adresse..." name="adresse"></input>

                <button type='submit'>valider</button>
                <input type="reset" onClick={this.reset} className="btn btn-warning" value="vider"></input>
            </form> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Adresse</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.employes.map((employe) => (
                <tr>
                <td>{employe.id}</td>
                <td>{employe.nom}</td>
                <td>{employe.prenom}</td>
                <td>{employe.age}</td>
                <td>{employe.grade}</td>
                <td>{employe.adresse}</td>
                <td>
                    <button className="btn btn-danger" onClick={(e) => this.toDelete(employe.id, e)}>Delete</button>
                </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
      )
    };
}