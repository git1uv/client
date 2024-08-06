import React from 'react';

function Trash() {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>감쓰 페이지</h1>
    </div>
=======
    <T.Container>
      <T.CenterSection>
        {isCard1Visible && <T.Card1 show={isCard1Visible} />}
        {isCard2Visible && (
        <T.Card2 show={isCard2Visible}>
          <T.Card2Button onClick={handleCard2ButtonClick} />
        </T.Card2>
      )}
      </T.CenterSection>
      <T.BottomSection>
        <T.Trash onClick={handleTrashClick} />
      </T.BottomSection>
      
    </T.Container>

>>>>>>> Stashed changes
  );
}

export default Trash;