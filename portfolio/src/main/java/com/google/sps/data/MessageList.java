package com.google.sps.data;

import java.util.Date;

/** Class containing server statistics. */
public final class MessageList {

  private final String messageOne;
  private final String messageTwo;


  public MessageList(String messageOne, String messageTwo) {
    this.messageOne = messageOne;
    this.messageTwo = messageTwo;
  }

  public String getMessageOne() {
    return messageOne;
  }

  public String getMessageTwo() {
    return messageTwo;
  }

}
