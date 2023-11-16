import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSelectTags() {
  const navigate = useNavigate();
  const tagList = useRef();
  const [checked, setChecked] = useState(false);
  const [tag, setTag] = useState();
  const [category, setCategory] = useState({ categoryId: null, text: "" });

  const handleClick = (e) => {
    setTag(e.target.id);
    setCategory(null);
    tagList?.current.scrollTo({
      top: 0,
    });
  };

  const handleSearch = () => {
    if (category.categoryId === null) {
      setCategory((prev) => ({ ...prev, text: "먼저 태그를 선택해주세요!" }));
      return;
    }
    navigate(`/search/category/${category?.categoryId}`);
  };

  const handleKeywordSearch = (data) => {
    if (data !== null) {
      navigate(`/search/keyword/${data.text}`);
    }
  };

  const handleSetCategory = (id, tagName) => {
    setCategory({
      categoryId: id,
      text: tagName,
    });
  };

  const handleCheck = () => {
    setChecked((prev) => !prev);
    setTag(null);
    setCategory(null);
  };

  return {
    handleSearch,
    handleClick,
    handleSetCategory,
    handleCheck,
    handleKeywordSearch,
    category,
    checked,
    tag,
    tagList,
  };
}
