variable "do_token" {
  description = "token của digital ocean"
}

variable "ssh_key" {
  description = "public key lưu tại VPS khởi tạo"

}


terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.95.0"
    }
  }
}

provider "digitalocean" {
  # Configuration 
  token = var.do_token
}

resource "digitalocean_droplet" "setup" {
  name    = "terraform-vps"
  image   = "ubuntu-24-04-x64"
  region  = "sgp1"
  size    = "s-1vcpu-1gb"
  ssh_keys = [ var.ssh_key ]
  
}

output "output_name" {
  value = {
    "ipv4" : digitalocean_droplet.setup.ipv4_address,
  }
}
