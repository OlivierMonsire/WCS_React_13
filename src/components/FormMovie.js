import React, {Component} from "react";
import Axios from "axios";

class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            poster : '',
            comment : ''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })}

        submitForm(e) {
            e.preventDefault()
            const url = 'https://post-a-form.herokuapp.com/api/movies'
            Axios.post(url, this.state)
                .then(res => res.data)
                .then(res => {
                    alert('Commentaire Envoyé avec succès')
                })
                .catch(e => {
                    console.error(e)
                    alert('Erreur lors de l\'envoie')
                })
        }

        render() {
            return (
                <div className="FormMovie">
                    <h1>Saisie d'un film</h1>

                    <form onSubmit={this.submitForm}>
                        <fieldset>
                            <legend>Informations</legend>
                            <div className="form-data">
                                <label htmlFor="title">Titre</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={this.onChange}
                                    value={this.state.title}
                                required />
                            </div>

                            <div className="form-data">
                                <label htmlFor="poster">Poster</label>
                                <input
                                    type="text"
                                    id="poster"
                                    name="poster"
                                    onChange={this.onChange}
                                    value={this.state.poster}
                                    required />
                            </div>

                            <div className="form-data">
                                <label htmlFor="comment">Avis</label>
                                <input
                                    type="textarea"
                                    id="comment"
                                    name="comment"
                                    onChange={this.onChange}
                                    value={this.state.comment}
                                    required />
                            </div>
                            <hr />
                            <div className="form-data">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            )
        }

}

export default FormMovie