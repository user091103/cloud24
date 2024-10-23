import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/server_time"})
public class ServerTime extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        
        Instant instant = Instant.now() ;
        ZonedDateTime currentTime = ZonedDateTime.now();
        String formattedDateTime = currentTime.format(DateTimeFormatter.ofPattern("HH:mm:ss dd/MM/yyyy z"));
        
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(resp.getOutputStream(), "UTF-8"));

        resp.setContentType("text/plain");
        resp.setStatus(200);
        writer.write("Server time: " + formattedDateTime);
        writer.write("\n");
        writer.write("Server time: " + instant.toEpochMilli());
        writer.flush();
        writer.close();
    }
}