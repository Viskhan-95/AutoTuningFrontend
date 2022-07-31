/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  delReview,
  getReviews,
  postReview,
} from "../../../features/reviews/reviewsSlice";
import { getUsers, showModalSignIn } from "../../../features/users/usersSlice";
import "./styles.css";

const Reviews = () => {
  const reviews = useSelector((state) => state.review.reviews);
  const users = useSelector((state) => state.usersReducer.users);
  const token = useSelector((state) => state.usersReducer.token);
  const loading = useSelector((state) => state.review.loading);
  const userId = localStorage.getItem("userId");
  const [sortNew, setSortNew] = useState(false);
  const [plusText, setPlusText] = useState("");
  const [minusText, setMinusText] = useState("");
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function handleSortNew() {
    setSortNew(!sortNew);
  }

  function handlePlusText(value) {
    setPlusText(value);
  }

  function handleMinusText(value) {
    setMinusText(value);
  }

  function handleRating(value) {
    setRating(value);
  }

  function handleOpen() {
    dispatch(showModalSignIn(true));
  }

  function handleDeleteReview(i) {
    dispatch(delReview(i));
  }

  function handleSubmitReview() {
    dispatch(postReview({ id, rating, plusText, minusText }));
    setMinusText("");
    setPlusText("");
  }

  return (
    <div className="review_block" style={{ marginTop: "2%" }}>
      <div className="tab">Отзывы({reviews.length})</div>
      <div className="sort_block">
        <div className="sort_text">Сортировать по:</div>
        <div className="sort_new" onClick={handleSortNew}>
          Новизне{sortNew ? " ↓" : " ↑"}
        </div>
      </div>
      {token ? (
        <div className="get_review_block">
          <div style={{ fontSize: "24px" }}>Ваш отзыв:</div>
          <div className="rating-area">
            <input
              onChange={() => handleRating(5)}
              type="radio"
              id="star-5"
              name="rating"
              value={rating}
            />
            <label htmlFor="star-5" title="Оценка «5»"></label>
            <input
              onChange={() => handleRating(4)}
              type="radio"
              id="star-4"
              name="rating"
              value={rating}
            />
            <label htmlFor="star-4" title="Оценка «4»"></label>
            <input
              onChange={() => handleRating(3)}
              type="radio"
              id="star-3"
              name="rating"
              value={rating}
            />
            <label htmlFor="star-3" title="Оценка «3»"></label>
            <input
              onChange={() => handleRating(2)}
              type="radio"
              id="star-2"
              name="rating"
              value={rating}
            />
            <label htmlFor="star-2" title="Оценка «2»"></label>
            <input
              type="radio"
              defaultChecked={true}
              id="star-1"
              name="rating"
              value={rating}
            />
            <label htmlFor="star-1" title="Оценка «1»"></label>
          </div>
          <div
            style={{
              marginTop: "1.5%",
              marginBottom: "0.25%",
              fontSize: "19px",
            }}
          >
            Достоинства:
          </div>
          <textarea
            required
            onChange={(e) => handlePlusText(e.target.value)}
            value={plusText}
            className="plus_text"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div
            style={{ marginTop: "1%", marginBottom: "0.25%", fontSize: "19px" }}
          >
            Недостатки:
          </div>
          <textarea
            required
            onChange={(e) => handleMinusText(e.target.value)}
            value={minusText}
            className="minus_text"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleSubmitReview} className="review_button">
            Добавить
          </button>
        </div>
      ) : (
        <div className="token_error">
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={handleOpen}
          >
            Войдите
          </span>{" "}
          в аккаунт, чтобы оставлять отзывы
        </div>
      )}
      <hr style={{ marginTop: "3%", border: "1px solid" }} />
      <div className={sortNew ? "reviews_list_true" : "reviews_list_false"}>
        {reviews &&
          reviews.map((item) => {
            return (
              users &&
              users.map((user) => {
                if (user._id === item.user) {
                  let star = "";
                  for (let index = 0; index < item.rating; index++) {
                    star += "★";
                  }
                  return (
                    <>
                      <hr />
                      <div className="review">
                        {loading && (
                          <div class="loading-window">
                            <div class="carr">
                              <div class="strike"></div>
                              <div class="strike strike2"></div>
                              <div class="strike strike3"></div>
                              <div class="strike strike4"></div>
                              <div class="strike strike5"></div>
                              <div class="car-detail spoiler"></div>
                              <div class="car-detail back"></div>
                              <div class="car-detail center"></div>
                              <div class="car-detail center1"></div>
                              <div class="car-detail front"></div>
                              <div class="car-detail wheel"></div>
                              <div class="car-detail wheel wheel2"></div>
                            </div>
                            <div class="text">
                              <span>Loading</span>
                              <span class="dots">...</span>
                            </div>
                          </div>
                        )}
                        <div className="user_img_login">
                          <img
                            className="user_img"
                            src="https://otzovik.com/static/img/2018/icons/default_photo.svg"
                            alt=""
                          />
                          <div className="user_name">{user.login}</div>
                          {userId === item.user && (
                            <div
                              onClick={() => handleDeleteReview(item._id)}
                              className="delete_review"
                            >
                              ×
                            </div>
                          )}
                        </div>
                        {loading && (
                            <div class="loading-window">
                              <div class="carr">
                                <div class="strike"></div>
                                <div class="strike strike2"></div>
                                <div class="strike strike3"></div>
                                <div class="strike strike4"></div>
                                <div class="strike strike5"></div>
                                <div class="car-detail spoiler"></div>
                                <div class="car-detail back"></div>
                                <div class="car-detail center"></div>
                                <div class="car-detail center1"></div>
                                <div class="car-detail front"></div>
                                <div class="car-detail wheel"></div>
                                <div class="car-detail wheel wheel2"></div>
                              </div>
                              <div class="text">
                                <span>Loading</span>
                                <span class="dots">...</span>
                              </div>
                            </div>
                          )}
                        <div className="review_block">
                          <div className="user_name_2">{user.login}</div>
                          <div className="data">
                            {item.data.slice(0, 10)} {item.data.slice(11, 16)}
                          </div>
                          <div className="rating">{star}</div>
                          <div style={{ marginBottom: "0.5%" }}>
                            Достоинства:
                          </div>
                          <div className="plus">{item.plus}</div>
                          <div style={{ marginBottom: "0.5%" }}>
                            Недостатки:
                          </div>
                          <div className="minus">{item.minus}</div>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                }
              })
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
