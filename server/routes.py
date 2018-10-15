from server import AppServer
from flask import render_template, flash, redirect, url_for, request, g , current_app
from flask import g
from forms import SearchForm
from flask_babel import _, get_locale

@AppServer.before_request

def before_request():
    g.search_form = SearchForm()
    g.filter = 'None'



@AppServer.route('/', methods=['GET', 'POST'])
@AppServer.route('/index', methods=['GET', 'POST'])
def index():
    form = SearchForm()
    g.search_form = SearchForm()
    if form.validate_on_submit():
        ...
        return redirect('/result')
    return render_template('index_1.html', title='Home')
    #return redirect('/app/MyDashApps') 	

	
@AppServer.route('/result', methods=['GET', 'POST'])
def result():
    return redirect('http://127.0.0.1:3000/')