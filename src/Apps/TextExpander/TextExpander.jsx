import React from "react";
import Expander from "./components/Expander";

const TextExpander = () => {
  return (
    <div>
      <h2>This is s Expander Text Excercise</h2>
      <Expander
        colappseWords={20}
        expandText="show more"
        collapseText="show less"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        ipsum velit corporis, animi, laudantium obcaecati molestiae voluptate
        iusto eos delectus cupiditate porro facilis beatae laborum voluptatibus
        enim qui minima at.
      </Expander>

      <Expander>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        ipsum velit corporis, animi, laudantium obcaecati molestiae voluptate
        iusto eos delectus cupiditate porro facilis beatae laborum voluptatibus
        enim qui minima at. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Est ipsum cupiditate, dolorem obcaecati assumenda accusamus
        voluptatem iste iure amet libero optio maxime laborum inventore
        quibusdam saepe sit ad. Dolores, voluptatem.
      </Expander>

      <Expander colappseWords={30}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        ipsum velit corporis, animi, laudantium obcaecati molestiae voluptate
        iusto eos delectus cupiditate porro facilis beatae laborum voluptatibus
        enim qui minima at. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Est ipsum cupiditate, dolorem obcaecati assumenda accusamus
        voluptatem iste iure amet libero optio maxime laborum inventore
        quibusdam saepe sit ad. Dolores, voluptatem.
      </Expander>
    </div>
  );
};

export default TextExpander;
