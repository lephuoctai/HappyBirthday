
  # Note 1:
  Để kiểm thử chúng ta có 3 bước
 
  B1:  Lập bảng các dữ liệu cần kiểm thử (testcase)
 
  B2" Cài đặt và thực thi với các dữ liệu này
 
  B3: Báo cáo kêys quả kiểm thử
  ______________
  # Note 2:
 
  - Dependency - - - - >
  Phụ thuộc theo
 
  - Association ------->
  Mối quan hệ kết hợp
 
  - Aggregation < >-------
  Mối quan hệ lệ thuộc độc lập
 
  - Compostion <#>-------
  Mối quan hệ lệ thuộc bắt buộc
 
  #* fill by black color
 ______
  # Note 3: Mối quan hệ uses
 
  |Class B| - - - -> |Class A|
 
  - Lớp B sử dụng A như biến cực bộ
 
  - Lớp B có một phương thức mà tham số là đối tượng lớp A
 
  - Lớp B gọi các phương thức "static" của lớp A
 
  - A thay đổi B bị ảnh hưởng
 ______
  Association : thuộc tính class A có mối quan hệ với B
 
  |Class Address| <------- |Class Student|
 
  - Student {
      homeAdress: Address
  }
  - Address {
      street: String
      city : String
  }
 ______
  Aggregation : là mối quan hệ "has - a", "whole/part", 2 đối tượng có thể tồn tại độc lập, khi tạo part chỉ cần gán , ko new.
 
  1..*
 
  |Class B| -------<> |Class A|
 
  Chapter ------<> Book
 
  Department (1..*) ------<> Company
 
  - Chapter xuất hiện khi Book được tạo
  - Chapter không thể tồn tại riêng lẻ mà không có Book
 
  1..* là mối quan hệ tồn tại tối thiểu 1
 ______
  Compostion : ~Aggregation "whole/part" nhưng nếu whole bị xóa thì tòan bộ part cũng không còn
 
  |Class B| -------<#> |Class A|
 
  |part | -------<#> |whole|
 
  Lobby (1) ------<#> Building <#>------- (1..*)Room
  Page (1..*) ------<#> Book
 
  - Chapter xuất hiện khi Book được tạo
  - Chapter không thể tồn tại riêng lẻ mà không có Book
 
  public Book() {
      page = new Page();
  }
 ______
  Compostion : ~Aggregation "whole/part" nhưng nếu whole bị xóa thì tòan bộ part cũng không còn
 
  |Class B| -------<#> |Class A|
 
  |part | -------<#> |whole|
 
  Lobby (1) ------<#> Building <#>------- (1..*)Room
  Page (1..*) ------<#> Book
 
  - Chapter xuất hiện khi Book được tạo
  - Chapter không thể tồn tại riêng lẻ mà không có Book
 
  public Book() {
      page = new Page();
  }
 
 
