var HTML_CSS_Chapter13 = [
  {
    Question: "CSS là gì?",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      "Cascading Style Sheets (thường được gọi đơn giản là CSS ) là ngôn ngữ được sử dụng để giải thích và mô tả cách thức những cái được viết bằng ngôn ngữ đánh dấu (như HTML) nên được hiển thị.",
      "Nói một cách đơn giản, CSS được sử dụng để trực quan hóa những thứ được viết bằng HTML, chẳng hạn như hình ảnh, phông chữ, hình nền, v.v.",
      "Khi nói đến các câu hỏi phỏng vấn CSS cơ bản như vậy, các nhà tuyển dụng thường tìm kiếm những người có thể giải thích bằng ngôn từ của chính họ chứ không phải là đọc thuộc lòng như robot. Đó là lý do tại sao bạn nên cố gắng học CSS từ các định nghĩa đơn giản nhất!",
    ],
    answerPlan: ["Tất cả đều sai!"],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
  {
    Question: "Sự khác biệt giữa CSS và HTML là gì?",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      "Nếu ta ví HTML giống như bộ khung của một trang web, thì CSS chính là phần da thịt đắp lên để hoàn thiện giao diện cho website đó. HTML và CSS vốn là hai ngôn ngữ hoàn toàn độc lập với nhau, giữa chúng tồn tại rất nhiều điểm khác biệt mà bạn nên lưu tâm.",
      "Sự khác biệt thực tế khá đơn giản: HTML (HyperText Markup Language) được sử dụng để viết và tạo nội dung trên trang web, trong khi CSS được sử dụng cho phần thiết kế - bao gồm thiết kế nền, phông chữ, hình ảnh, v.v.",
      "CSS là công cụ mô tả cách mà những phần tử HTML được trình bày trên trang web. Không giống với HTML, CSS tập trung vào việc thay đổi và định hình phong cách cho website chứ không can thiệp đến nội dung. ",
      "Chức năng: HTML được sử dụng để xác định cấu trúc một trang web, không được dùng với mục đích trình bày và hiển thị. CSS được sử dụng để tạo kiểu cho trang web thông qua các đặc điểm phong cách khác nhau, dùng với mục đích trình bày và hiển thị.",
      "Thành phần: Cấu trúc cơ bản của HTML gồm các thẻ và nội dung. CSS được cấu tạo bởi các bộ chọn và khối khai báo.",
      "Tính liên quan: CSS có thể được sử dụng trong các file HTML. Nhưng HTML thì không thể dùng được trong các style sheet của CSS.",
      "Phương pháp sử dụng: Trong HTML, phương pháp sử dụng là không xác định. Trong CSS, bạn có thể sử dụng style sheet External, Internal hoặc Inline.",
      "Sao lưu và hỗ trợ: So với CSS, HTML có ít sao lưu và hỗ trợ hơn.",
    ],
    answerPlan: [
      "Giờ thì bạn không thể nhầm lẫn giữa 2 ngôn ngữ này nữa rồi phải không nào? Để có thể tạo nên những website với bố cục khoa học, giao diện bắt mắt và hiệu ứng thu hút thì, bạn hãy học cách sử dụng đồng thời cả HTML và CSS một cách hiệu quả.",
    ],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
  {
    Question: "Những ưu điểm của việc sử dụng CSS là gì?",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      "Tính nhất quán toàn diện",
      "Băng thông",
      "Định dạng lại trang",
      "Khả năng tiếp cận",
      "Nội dung tách biệt với phần trình bày",
    ],
    answerPlan: [],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
  {
    Question: "Cách sử dụng CSS trên một trang web?",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      "Phương pháp CSS Inline: khai báo CSS vào bên trong giá trị của thuộc tính style, sau đó đặt thuộc tính style vào thẻ mở của phần tử mà mình muốn định dạng.",
      "Phương pháp CSS Internal: Khi muốn định dạng cho một phần tử HTML nào đó thì ta viết bộ định dạng của phần tử đó vào bên trong phần tử &lt;style&gt; &lt;/style&gt;. Lưu ý: Phần tử &lt;style&gt; có thể được đặt ở bất kỳ vị trí nào bên trong trang web, tuy nhiên nơi phù hợp nhất chính là nằm bên trong phần tử &lt;head&gt;.",
      "Phương pháp CSS External: Sử dụng thẻ &lt;link&gt; để nhúng tập tin CSS vào tập tin HTML chứa phần tử muốn định dạng. Viết CSS tại file CSS vừa nhúng",
    ],
    answerPlan: ["Tất cả đều sai!"],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
  {
    Question: "Có bao nhiêu loại CSS?",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      "CSS, tổng cộng, hiện có năm loại CSS: CSS1 , CSS2 , CSS2.1 , CSS3 và CSS4 .",
      "Bạn rất có thể nhận được rất nhiều câu hỏi phỏng vấn để kiểm tra về việc học CSS3, vì CSS3 là một trong những phiên bản được sử dụng phổ biến nhất.",
    ],
    answerPlan: [""],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
  {
    Question: "Mức độ ưu tiên giữa các phương pháp sử dụng CSS",
    Requirements: "MultipleAnswers - Thông tin tham khảo:",
    correctAnswer: [
      " Phương pháp Inline CSS có độ ưu tiên cao nhất.",
      "Phương pháp CSS Internal & CSS External có cùng mức độ ưu tiên",
      "CSS Internal & CSS External Hai phương pháp này có cùng một mức độ ưu tiên Nên phương pháp nào được gọi sau thì phương pháp đó được ưu tiên",
    ],
    answerPlan: [],
    suggestions: "Cảm ơn sự tin tưởng và đồng hành của bạn!",
    Audio: "",
    Video: "",
    Image: "",
  },
];
var HTML_CSS_Chapter14 = [];
var HTML_CSS_Chapter15 = [];
var HTML_CSS_Chapter16 = [];
var HTML_CSS_Chapter17 = [];
var HTML_CSS_Chapter18 = [];
var HTML_CSS_Chapter19 = [];
var HTML_CSS_Chapter20 = [];
