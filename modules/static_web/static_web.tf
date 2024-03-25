resource "azurerm_storage_account" "example" {
  name                     = var.static_web_storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.resource_group_location
  account_tier             = var.static_web_account_tier
  account_replication_type = var.static_web_account_replication_type

  static_website {
    index_document = var.static_website_index_document
    #error_404_document = "404.html"
  }
  tags = {
    environment = "dev"
  }
}

resource "azurerm_storage_container" "example" {
  name                  = var.storage_container_static_web_name
  storage_account_name  = azurerm_storage_account.example.name
  container_access_type = var.static_web_container_access_type
}

# Upload your static website files to the blob container
resource "azurerm_storage_blob" "example" {
  name                   = var.static_web_storage_blob_name
  storage_account_name   = azurerm_storage_account.example.name
  storage_container_name = azurerm_storage_container.example.name
  type                   = var.static_web_storage_blob_type
  source                 = var.static_web_storage_blob_source
}

resource "azurerm_cdn_profile" "cdn" {
  name                = var.cdn_profile_partner_portal_name
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  sku                 = var.cdn_profile_partner_portal_sku

}

resource "azurerm_cdn_endpoint" "example" {
  name                = var.cdn_endpoint_partner_portal_name
  profile_name        = azurerm_cdn_profile.cdn.name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name

  origin {
    name      = azurerm_storage_account.example.name
    host_name = "terrastaticwebstorage.z13.web.core.windows.net"
    #http_port  = var.cdn_endpoint_partner_portal_http_port
    #https_port = var.cdn_endpoint_partner_portal_https_port
  }
}


/*resource "azurerm_storage_blob" "example_404" {
  name                   = "404.html"
  storage_account_name   = azurerm_storage_account.example.name
  storage_container_name = azurerm_storage_container.example.name
  type                   = "Block"
  source                 = "path/to/your/404.html"
}*/

output "storage_account_primary_blob_endpoint" {
  value = azurerm_storage_account.example.primary_blob_endpoint
}

output "static_website_endpoint" {
  value = azurerm_storage_account.example.primary_web_endpoint
}