
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/count_rows"})
public class CountRows extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        LocalTime currentTime = LocalTime.now(); // Sử dụng lớp LocalTime để lấy giờ hiện tại
        String formattedTime = currentTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")); // Định dạng thành "giờ:phút:giây"

        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(resp.getOutputStream(), "UTF-8"));

        resp.setContentType("text/plain");
        resp.setStatus(200);
        writer.write("Server time: " + formattedTime);
        writer.write("Hi!");
        writer.flush();
        writer.close();
    }
}
