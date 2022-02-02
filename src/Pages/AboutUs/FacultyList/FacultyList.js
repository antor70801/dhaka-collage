
import Footer from '../../../Shared/Footer';
import NavigationBar from '../../../Shared/NavigationBar';
import AllDeperMennts from '../../Components/AllDeperMennts';
import Teacher from '../../Components/Teacher';

const FacultyList = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='m-3' style={{ paddingTop: 107 }}>
                <div className="container">
                    <div className="row">
                        <div class="col-12 col-md-3 col-lg-3 social-buttons">
                            <AllDeperMennts></AllDeperMennts>
                        </div>
                        <div className="col-12 col-lg-9 col-md-9">
                            <Teacher></Teacher>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default FacultyList;