import $ from 'jquery';
const mailformat = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const passwordFormat = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
var common = {
    getCall: function (type = "GET", url, data = {}, callback) {
        if (!window.jQuery) {
            console.warn("import jquery to use jqueryAjax");
            return;
        }

        $.ajax({
            //async: false,
            type: type,
            url: url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'JSON',
            data: data,
            success: callback,
            error: callback
        });
    },
    ValidateEmail: function (inputText)
    {
        if(mailformat.test(inputText))
        {
            // alert("Valid email address!");
            return true;
        }
        else
        {
            // alert("Invalid email address!");
            return false;
        }
    },
    ValidatePassword: function (inputText)
    {
        if(passwordFormat.test(inputText))
        {
            // alert("Valid email address!");
            return true;
        }
        else
        {
            // alert("Invalid email address!");
            return false;
        }
    },
    loader: function() {
        return (
        <section className="card-body">
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
        </div>
      </section>);
    }

}

export default common;