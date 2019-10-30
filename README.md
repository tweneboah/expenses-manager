
### Current state of the app

## Click to visis [Xpensify-Manager](https://xpensify-manager.herokuapp.com/)

# Languages used

* React Js
* Redux 
* Node Js
* Express Js
* MongoDB
* mongoose

## Current Features

* All these features uses redux and our custom api

1. Create
2. Delete
3. Fetch
4. Filter by Text Input



                <h3>ExpensesForm</h3>
                <h2>Visit your Dashboard <a href='/dashboard'>Dashboard</a></h2>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        name="description"
                        onChange={this.onChangeInput}
                    />

                    <input
                        type="number"
                        placeholder="amount"
                        name="amount"
                        onChange={this.onAmountChange}
                    />


                    <textarea
                        placeholder="Add notes (optional)"
                        name="notes"
                        onChange={this.onChangeInput}
                    ></textarea>

                    {/* Redirect after clicking */}
                    <button type="submit"
                        onClick={this.onFormSubmit}
                    >Submit</button>


                </form>
