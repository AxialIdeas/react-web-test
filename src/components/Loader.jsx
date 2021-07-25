import './../assets/vendor/bootstrap/css/bootstrap.min.css';
import './../assets/libs/css/style.css';

export default ({fullpage = false}) =>{
       return fullpage ? (<section> </section>) 
        :
    (<section className="card-body">
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
    </div>
  </section>)}