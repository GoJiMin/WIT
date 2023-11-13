import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSelectTags() {
  const navigate = useNavigate();
  const tagList = useRef();
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
    navigate(`/search/${category?.categoryId}`);
  };

  const handleSetCategory = (id, tagName) => {
    setCategory({
      categoryId: id,
      text: tagName,
    });
  };

  return {
    category,
    handleSearch,
    handleClick,
    tag,
    handleSetCategory,
    tagList,
  };
}
