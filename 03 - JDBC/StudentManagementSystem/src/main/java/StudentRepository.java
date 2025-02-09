import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//4-DB ile iletişimde olan class:connection, statement,prepared statement
public class StudentRepository {

    private Connection conn;
    private Statement st;
    private PreparedStatement prst;

    //5-connection için bir metod oluştur
    private void getConnection(){
        try {
            this.conn= DriverManager.getConnection("jdbc:postgresql://localhost:5432/jdbc_db","dev_user","password");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
    //6-statement oluşturmak için metod
    private void getStatement(){
        try {
            this.st=conn.createStatement();
        } catch (SQLException e) {
            System.out.println(e.getMessage());;
        }
    }

    //7-prepared statement oluşturma metodu
    private void getPreparedStatement(String sql){
        try {
            this.prst= conn.prepareStatement(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());;
        }
    }

    //8-tablo oluşturma
    public void createTable(){
        getConnection();
        getStatement();
        try {//idye unique constrainti eklenmeli
            st.execute("CREATE TABLE IF NOT EXISTS t_student(id SERIAL,name VARCHAR(50),lastname VARCHAR(50),city VARCHAR(20),age INT)");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                st.close();
                conn.close();
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }

//12-tabloya veri ekleme
    public void save(Student student) {
        getConnection();
        String sql="INSERT INTO t_student(name,lastname,city,age) VALUES(?,?,?,?)";
        getPreparedStatement(sql);
        try {
            prst.setString(1,student.getName());
            prst.setString(2,student.getLastname());
            prst.setString(3,student.getCity());
            prst.setInt(4,student.getAge());
            prst.executeUpdate();
            System.out.println("kayıt işlemi başarıyla gerçekleştirildi.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                prst.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }

    }

//14-tüm kayıtları yazdırma
    public void findAll() {
        getConnection();
        getStatement();
        String sql="SELECT * FROM t_student";
        try {
            ResultSet resultSet=st.executeQuery(sql);
            System.out.println("+"+"-".repeat(79)+"+");
            System.out.printf("| %-5s| %-20s| %-20s| %-20s| %-5s|\n", "id","ad","soyad","sehir","yas");
            while (resultSet.next()){
                System.out.printf("| %-5d| %-20s| %-20s| %-20s| %-5d|\n", resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("lastname"),
                        resultSet.getString("city"),
                        resultSet.getInt("age"));
            }
            System.out.println("+"+"-".repeat(79)+"+");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                st.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }

    }
//16-tablodan veri silmne
    public void delete(int id) {
        getConnection();
        String sql="DELETE FROM t_student WHERE id=?";
        getPreparedStatement(sql);
        try {
            prst.setInt(1,id);
            int deleted=prst.executeUpdate();
            if (deleted>0){
                System.out.println("id:"+id+" olan kayıt başarıyla silinmiştir");
            }else{
                System.out.println("id:"+id+" bulunamadı");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                prst.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
    }

//18-id ile tek bir kayıt dönme
    public Student findStudentById(int id) {
        Student student=null;
        getConnection();
       /* String sql="SELECT * FROM t_student WHERE id="+id;
        getStatement();
        st.executeQuery(sql);*/
        String sql="SELECT * FROM t_student WHERE id=?";
        try {
            getPreparedStatement(sql);
            prst.setInt(1,id);
            ResultSet resultSet=prst.executeQuery();
            if(resultSet.next()){
                student=new Student();
                student.setId(resultSet.getInt("id"));
                student.setName(resultSet.getString("name"));
                student.setLastname(resultSet.getString("lastname"));
                student.setCity(resultSet.getString("city"));
                student.setAge(resultSet.getInt("age"));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                prst.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
        return student;
    }
//20-veri güncelleme
    public void update(Student student) {
        getConnection();
        String sql="UPDATE t_student SET name=?,lastname=?,city=?,age=? WHERE id=?";
        getPreparedStatement(sql);
        try {
            prst.setString(1,student.getName());
            prst.setString(2,student.getLastname());
            prst.setString(3,student.getCity());
            prst.setInt(4,student.getAge());
            prst.setInt(5,student.getId());
            int updated=prst.executeUpdate();
            if(updated>0){
                System.out.println("Öğrenci başarıyla güncellendi.");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                prst.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
    }
//22-name veya lastname sütununda girilen harf dizisini içeren kayıtları getirme
    public List<Student> findStudentByNameOrLastname(String nameOrLastname) {
        List<Student> list=new ArrayList<>();
        getConnection();
        String searched="%"+nameOrLastname+"%";
        String sql="SELECT * FROM t_student WHERE name ILIKE ? OR lastname ILIKE ?";
        getPreparedStatement(sql);
        try {
            prst.setString(1,searched);// ILIKE '%nameOrLastname%'
            prst.setString(2,searched);
            ResultSet rs=prst.executeQuery();
            while (rs.next()){
                Student student=new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setLastname(rs.getString("lastname"));
                student.setCity(rs.getString("city"));
                student.setAge(rs.getInt("age"));
                list.add(student);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                prst.close();
                conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
       return list;
    }
}
