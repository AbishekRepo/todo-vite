import FocusManagement from "./focus-management/focusManagement";
import Previousvalue from "./previous-value/Previousvalue";
// import Scroll from "./scroll/Scroll";

const Useref = () => {
  return (
    <div className="useref-examples">
      <h2>useRef Use Cases</h2>
      <section>
        <h3>1. Focus Management</h3>
        <FocusManagement />
      </section>

      <section>
        <h3>2.Scroll to Element</h3>
        {/* <Scroll /> comment out to see scroll functionality */}
      </section>

      <section className="previous-value">
        <h3>3. Previous Value Tracking</h3>
        <Previousvalue />
      </section>
    </div>
  );
};

export default Useref;
