using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
  public class GameHub : Hub
  {
    private readonly IMediator _mediator;
    public GameHub(IMediator mediator)
    {
      _mediator = mediator;
    }

    public async Task SendMessage(string name, string message, string lobby)
    {
      await Clients.Group(lobby).SendAsync("SendMessage", message);
    }
  }
}