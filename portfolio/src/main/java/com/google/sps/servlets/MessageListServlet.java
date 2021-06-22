package main.java.com.google.sps.servlets;

import com.google.sps.data.MessageList;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/message-list")
public final class MessageListServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    ArrayList<String> messages = new ArrayList<String>();
    messages.add("Woop woop! Time to party.");
    messages.add("There is a leap year because the Earth is tilted.");
    messages.add("The Lighnting current starts from the ground up.");

    int indexOne = (int)(Math.random() * messages.size());
    int indexTwo = (int)(Math.random() * messages.size());
    String messageOne = messages.get(indexOne);
    String messageTwo = messages.get(indexTwo);
    
    // Convert to JSON
    MessageList messageList = new messageList(messageOne, messageTwo);
    String json = convertToJson(messageList);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(MessageList messageList) {
    String json = "{";
    json += "\"messageOne\": ";
    json += "\"" + messageList.getMessageOne() + "\"";
    json += ", ";
    json += "\"messageTwo\": ";
    json += messageList.getMessageTwo();
    json += "}";
    return json;
  }

   private String convertToJsonUsingGson(MessageList messageList) {
    Gson gson = new Gson();
    String json = gson.toJson(messageList);
    return json;
}

}