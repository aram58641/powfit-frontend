import style from './NavBarResponse.module.scss';


const NavBarResponse = () => {
  return (
   <>
     <div
            className={`offcanvas offcanvas-start ${style.leftBarResponse}`}
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>

              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body"></div>
          </div>
   </>
  );
};

export default NavBarResponse;
