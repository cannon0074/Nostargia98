import "../../css/custom.css";

// ボタン種類の定義
const buttonDictionary = {
  save: {
    text: "保存",
    class_name: "custom-btn-large orange",
  },
  return: {
    text: "戻る",
    class_name: "custom-btn-large gray",
  },
  delete: {
    text: "削除",
    class_name: "",
  },
  read: {
    text: "CSV取込",
    class_name: "",
  },
  download: {
    text: "CSVダウンロード",
    class_name: "",
  },
  search: {
    text: "検索",
    class_name: "orange",
  },
  clear: {
    text: "検索条件のクリア",
    class_name: "",
  },
};

// 画面共通で使用するbuttonタグで表示できる要素を定義するコンポーネント
// @param {Object} props - コンポーネントに渡されるプロップス。
// @param {string} props.kind - ボタンの種類を指定する値。
// @returns 描画される要素。

const CustomButton = ({ kind }) => {
  let { text, class_name } = buttonDictionary[kind];

  // 共通のクラス名を追加
  class_name += " custom-btn-common";

  return (
    <div>
      <button className={class_name} type="submit">
        {text}
      </button>
    </div>
  );
};

export default CustomButton;

ボタン種類[kind];
export const ButtonKindDefine = {
  SAVE: "save",
  RETURN: "return",
  DELETE: "delete",
  READ: "read",
  DOWNLOAD: "download",
  SEARCH: "search",
  CLEAR: "clear",
};
