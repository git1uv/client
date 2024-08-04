import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import { FaHeart, FaTrash} from "react-icons/fa";

function Letter() {

  return (
    <L.Container>
      <L.Mailbox>
          <L.TopRow>
            <L.Delete>
              <button><FaTrash /></button>
            </L.Delete>
            <L.SeeAll>
              <button><FaHeart /></button>
            </L.SeeAll>
            <L.Favorites>
              <button><FaHeart /></button>
            </L.Favorites>
            <L.NotRead>
              <button><FaHeart /></button>
            </L.NotRead>
          </L.TopRow>
          <L.Letters>
          </L.Letters>
      </L.Mailbox>
    </L.Container>
  );
}

export default Letter;

